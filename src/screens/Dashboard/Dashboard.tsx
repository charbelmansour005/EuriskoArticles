import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  storeArticles,
  storeFilteredArticles,
} from '../../features/article/articlesSlice';
import {Article} from '../../features/article/types';
import {useAppDispatch} from '../../app/rtkHooks';
import {getArticles} from '../../services/articles';
import DashArticleCard from '../../components/DashArticleCard';
import {themeColors} from '../../helpers/themeColors';
import {DashboardProps} from './types';
import {ActivityIndicator} from 'react-native-paper';

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

  const loadArticles = async (): Promise<void> => {
    if (page == 0) {
      setIsLoading(true);
    }
    getArticles(page)
      .then(async (response: any) => {
        if (response.response.docs.length < 10) {
          setDataFound(true);
        }
        setArticlesList(prev => prev.concat(response.response.docs));
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

  return loading && !articleError ? (
    <Text style={{color: 'black'}}>Loading...</Text>
  ) : (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: themeColors.darkgray,
          ...styles.maxWidth,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={search ? searchedArticles : articlesList}
          keyExtractor={item => `${item._id}+${Math.random() * 8798789}`}
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
                  ? 'To see this article, please hold the card'
                  : item?.lead_paragraph
              }
              url={item?.web_url ? item?.web_url : null}
              section={item?.section_name ? item.section_name : 'No section'}
            />
          )}
          ListFooterComponent={
            !dataFound ? (
              <ActivityIndicator
                size="small"
                color={themeColors.red}
                style={{marginVertical: 10}}
              />
            ) : null
          }
          // ListFooterComponent={
          //   !dataFound && !search ? (
          //     <ActivityIndicator
          //       size="small"
          //       color={themeColors.red}
          //       style={{marginVertical: 10}}
          //     />
          //   ) : null
          // }
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
