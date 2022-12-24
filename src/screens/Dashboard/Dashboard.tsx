import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  storeArticles,
  storeFilteredArticles,
} from '../../features/article/articlesSlice';
import {Article} from '../../features/article/types';
import {useAppDispatch} from '../../app/rtkHooks';
import {Durations} from '../../helpers/toasts';
import {getArticles} from '../../services/articles';
import {themeColors} from '../../helpers/themeColors';
import {useToast} from 'react-native-toast-notifications';
import {DashboardProps} from './types';
import {
  DashHeader,
  DashTopLoader,
  LoadingSpinner,
  DashArticleCard,
} from '../../components/index';

const Dashboard = ({
  searchBaseValue = ``,
  pageBaseValue = 0,
  loadingBaseValue = false,
  articlesListBaseValue = [],
  searchedArticlesBaseValue = [],
  dataFoundBaseValue = false,
}: DashboardProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState(searchBaseValue);
  const [page, setPage] = useState(pageBaseValue);
  const [loading, setIsLoading] = useState(loadingBaseValue);
  const [articleError, setArticleError] = useState<boolean>(false);
  const [dataFound, setDataFound] = useState(dataFoundBaseValue);
  const [articlesList, setArticlesList] = useState<Article[]>(
    articlesListBaseValue,
  );
  const [searchedArticles, setSearchedArticles] = useState<Article[]>(
    searchedArticlesBaseValue,
  );
  const toast = useToast();

  const welcomeToast = (): void => {
    toast.show('To view an article, press on one, or long press for website', {
      type: 'normal',
      duration: Durations.MEDIUM,
      animationType: 'zoom-in',
      placement: 'center',
    });
  };

  useEffect(() => {
    welcomeToast();
  }, []);

  const loadArticles = async (): Promise<void> => {
    if (page == 0) {
      setIsLoading(true);
    }
    getArticles(page)
      .then(async (response: any) => {
        if (response.response.docs.length < 10) {
          setDataFound(true);
        }
        // keeping the previously fetched articles & concatenating the new ones
        setArticlesList(prev => prev.concat(response.response.docs));
        // storing the response
        dispatch(storeArticles(response.response.docs));
      })
      .catch(error => {
        setArticleError(true);
        Alert.alert(
          'There was an issue',
          `${error.data.message}.`,
          [
            {
              text: 'Okay',
              style: 'default',
            },
          ],
          {cancelable: true},
        );
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    loadArticles();
  }, [page]);

  const searchArticles = (): void => {
    if (search) {
      var searchRegex = new RegExp(
        search.replace(/[.,\/#!?$%^&*;:{}=\-_`~()\\]/g, '') + '(\\s|$)',
        'i',
      );
      setSearchedArticles(
        articlesList.filter(
          item =>
            item.headline.main.match(searchRegex) ||
            item.lead_paragraph.match(searchRegex),
        ),
      );
      dispatch(storeFilteredArticles(searchedArticles));
    }
  };

  useEffect(() => {
    searchArticles();
  }, [search]);

  const handleOnEndReached = (): void => {
    if (!search) {
      setPage(page + 1);
    }
  };

  const handleOnRefresh = (): void => {
    setArticlesList([]);
    setDataFound(false);
    setPage(0);
    setIsLoading(false);
    loadArticles();
  };

  return loading && !articleError ? (
    <DashTopLoader />
  ) : (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: themeColors.transparentGray,
          ...styles.maxWidth,
        }}>
        <DashHeader search={search} setSearch={setSearch} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={search ? searchedArticles : articlesList}
          keyExtractor={item => `${item._id}+${Math.random() * 8798789}`}
          refreshControl={
            <RefreshControl
              enabled={!search}
              refreshing={loading}
              onRefresh={async () => {
                handleOnRefresh();
              }}
              tintColor="red"
            />
          }
          onEndReachedThreshold={0}
          onEndReached={async ({distanceFromEnd}) => {
            if (distanceFromEnd < 0) {
              return;
            }
            handleOnEndReached();
          }}
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
  );
};

const styles = StyleSheet.create({
  maxWidth: {
    height: '100%',
    width: '100%',
  },
});

export default Dashboard;
