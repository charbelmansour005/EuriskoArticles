import {View, Text, StyleSheet, Linking} from 'react-native';
import {Card, ActivityIndicator} from 'react-native-paper';
import {themeColors} from '../helpers/themeColors';

type ArticleCardBaseProps = {
  headline?: string;
  leadParagraph?: string;
  author?: string;
};
type ArticleCardAllProps = ArticleCardBaseProps & {
  url?: string | undefined | any;
  section?: string | null;
};

const DashArticleCard = ({...props}: ArticleCardAllProps): JSX.Element => {
  return (
    <Card
      mode="elevated"
      onLongPress={() => Linking.openURL(props.url)}
      style={styles.parent}>
      <View style={styles.cardContainer}>
        <Text style={{color: 'black'}}>Hiii</Text>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {props.headline?.trim()}
        </Text>
      </View>
    </Card>
  );
};

export default DashArticleCard;

const styles = StyleSheet.create({
  parent: {
    marginVertical: 0.5,
    backgroundColor: 'white',
    height: 160,
    borderRadius: 0,
  },
  cardContainer: {
    borderRadius: 2,
    alignSelf: 'center',
    marginVertical: 10,
    padding: 5,
    width: '99%',
  },
  cardTitle: {
    fontSize: 16,
    color: themeColors.salmon,
    padding: 1,
    fontWeight: 'bold',
  },
});
