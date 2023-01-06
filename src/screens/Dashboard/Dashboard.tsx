import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
  RefreshControl,
  StatusBar,
} from 'react-native'
import React, {useEffect, useState, useCallback} from 'react'
import {
  storeArticles,
  storeFilteredArticles,
} from '../../features/article/articlesSlice'
import {Article} from '../../features/article/types'
import {useAppDispatch} from '../../app/rtkHooks'
import {Durations} from '../../helpers/toasts'
import {getArticles} from '../../services/articles'
import {themeColors} from '../../helpers/themeColors'
import {useToast} from 'react-native-toast-notifications'
import {useAppSelector} from '../../app/rtkHooks'
import {DashboardProps} from './types'
import {
  DashHeader,
  DashTopLoader,
  LoadingSpinner,
  DashArticleCard,
} from '../../components/index'

const Dashboard = ({
  searchBaseValue = ``,
  pageBaseValue = 0,
  loadingBaseValue = false,
  articlesListBaseValue = [],
  searchedArticlesBaseValue = [],
  dataFoundBaseValue = false,
}: DashboardProps): JSX.Element => {
  const language = useAppSelector(state => state?.language)
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState(searchBaseValue)
  const [page, setPage] = useState(pageBaseValue)
  const [loading, setIsLoading] = useState(loadingBaseValue)
  const [articleError, setArticleError] = useState<boolean>(false)
  const [dataFound, setDataFound] = useState(dataFoundBaseValue)
  const [articlesList, setArticlesList] = useState<Article[]>(
    articlesListBaseValue,
  )
  const [searchedArticles, setSearchedArticles] = useState<Article[]>(
    searchedArticlesBaseValue,
  )
  const toast = useToast()

  const welcomeToast = (): void => {
    toast.show('To view an article, press on one, or long press for website', {
      type: 'normal',
      duration: Durations.MEDIUM,
      animationType: 'zoom-in',
      placement: 'center',
    })
  }

  useEffect(() => {
    welcomeToast()
  }, [])

  const loadArticles = useCallback(async (): Promise<void> => {
    if (page == 0) {
      setIsLoading(true)
    }
    getArticles(page)
      .then(async (response: any) => {
        // avoid showing the loading indicator when there is no new data
        if (response.response.docs.length < 10) {
          setDataFound(true)
        }
        // keeping the previously fetched articles & concatenating the new ones
        setArticlesList(prev => prev.concat(response.response.docs))
        // storing the response
        dispatch(storeArticles(response.response.docs))
      })
      .catch(error => {
        setArticleError(true)
        Alert.alert(
          'There was an issue',
          `${error.data.message}.`,
          [
            {
              // no function passed = cancel behavior
              text: 'Okay',
              style: 'default',
            },
          ],
          {cancelable: true},
        )
      })
      .finally(() => setIsLoading(false))
  }, [page])

  useEffect(() => {
    loadArticles()
  }, [page])

  const handleOnEndReached = (): void => {
    if (!search) {
      setPage(page + 1)
    }
  }

  const handleOnRefresh = (): void => {
    setArticlesList([]) // stopping the same data from being refetched
    setDataFound(false) // displaying the loading indicator correctly
    setPage(0) // resetting the page to show latest data (if any)
    setIsLoading(false) // stopping any previous loading state
    loadArticles() // refetching
  }

  const searchArticles = useCallback((): void => {
    if (search) {
      // introducing the searchRegex var
      var regex = new RegExp(
        // replacing the incorrect search input
        search.replace(/[.,\/#!?$%^&*;:{}=\-_`~()\\]/g, '') + '(\\s|$)',
        'i',
      )
      // using the regex var
      setSearchedArticles(
        // using the .filter method
        articlesList.filter(
          item =>
            item.headline.main.match(regex) || item.lead_paragraph.match(regex),
        ),
      )
      // after setting the state of searchedArticles, we are then storing it in redux
      dispatch(storeFilteredArticles(searchedArticles))
    }
  }, [search])

  useEffect(() => {
    searchArticles()
  }, [search])

  return loading && !articleError ? (
    <DashTopLoader />
  ) : (
    <SafeAreaView>
      <StatusBar
        translucent={false}
        barStyle="light-content"
        backgroundColor="#5865F2"
      />
      <View
        style={{
          backgroundColor: themeColors.transparentGray,
          ...styles.maxWidth,
        }}>
        {/* handling the search in the header */}
        <DashHeader search={search} setSearch={setSearch} language={language} />
        <FlatList
          /**
           * @keyExtractor using only item._id generates an error
           * @Math must use instead of uuid
           */
          keyExtractor={item => `${item._id}+${Math.random() * 8798789}`}
          /**
           * @data conditionally setting the data: if the user searches, display the filtered data.
           * @search is used for detecting search input, and bad characters are being replaced by regex
           * @searchedArticles are the filtered data
           */
          data={search ? searchedArticles : articlesList}
          /**
           * @showsVerticalScrollIndicator -> false: gaining reading space
           */
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              enabled={!search} // can't fetch new data if searching
              refreshing={loading}
              onRefresh={async () => {
                handleOnRefresh()
              }}
              tintColor="red"
            />
          }
          /**
           * @onEndReachedThreshold
           * specifying when new data gets loaded
           * 0.5 -> the list will update when the user is halfway down the current dataset
           */
          onEndReachedThreshold={0.5}
          // set new page
          onEndReached={async ({distanceFromEnd}) => {
            if (distanceFromEnd < 0) {
              return
            }
            handleOnEndReached()
          }}
          /**
           * @renderItem destructuring data that will be used as props
           */
          renderItem={({item}) => (
            <DashArticleCard
              headline={
                item?.headline.main ? item.headline.main : 'Title unavailable'
              }
              author={
                !item?.byline?.original || item.byline.original.includes('None')
                  ? 'Unknown author'
                  : item.byline.original
              }
              leadParagraph={
                item?.lead_paragraph.includes('{') ||
                item?.lead_paragraph.includes('}') ||
                !item?.lead_paragraph
                  ? 'To see this article, please hold your finger here'
                  : item?.lead_paragraph
              }
              url={item?.web_url ? item?.web_url : null}
              section={item?.section_name ? item.section_name : 'No section'}
            />
          )}
          ListFooterComponent={
            !dataFound && !search ? <LoadingSpinner /> : null
          }
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  maxWidth: {
    height: '100%',
    width: '100%',
  },
})

export default Dashboard
