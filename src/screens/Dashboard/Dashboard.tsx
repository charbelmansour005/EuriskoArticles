import {StyleSheet, Text, View, Alert, ScrollView} from 'react-native';
import {DashboardProps} from './types';
import {SafeAreaView} from 'react-native';
import {
  storeFilteredArticles,
  storeArticles,
} from '../../features/article/articlesSlice';
import {FlatList} from 'react-native'; //magic sauce
import {Article} from '../../features/article/types';
import {useAppDispatch} from '../../app/rtkHooks';
import {getArticles} from '../../services/articles';
import React, {useState, useEffect} from 'react';
import DashArticleCard from '../../components/DashArticleCard';

const Dashboard = (props: DashboardProps) => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>(``);
  const [page, setPage] = useState<number>(0);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [articleError, setArticleError] = useState<boolean>(false);
  const [dataFound, setDataFound] = useState<boolean>(false);
  const [articlesList, setArticlesList] = useState<Article[]>([]);
  const [searchedArticles, setSearchedArticles] = useState<Article[]>([]);
  const loadArticles = async (): Promise<void> => {
    if (page == 0) {
    }
    getArticles(page)
      .then(async (response: any) => {
        if (response.response.docs.length < 10) {
          setDataFound(true);
        }
        setArticlesList(prev => prev.concat(response.response.docs));
        dispatch(storeArticles(response.response.docs));
        console.log(response.response.docs);
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

  return (
    <View>
      <Text style={{color: 'black'}}>Hiiiii</Text>
      <FlatList
        data={search ? searchedArticles : articlesList}
        keyExtractor={item => `${item._id}+${Math.random() * 8798789}`}
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
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
