import {AxiosResponse, AxiosRequestConfig, AxiosError} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {instance} from './api';
import {articlesURL} from '../helpers/url';

export const getArticles = async (page: number) =>
  new Promise(async (resolve, reject) => {
    try {
      const accessToken = await AsyncStorage.getItem('@accessToken');
      const config: AxiosRequestConfig = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response: AxiosResponse = await instance.get(
        `${articlesURL}${page}`,
        config,
      );
      resolve(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        reject(error.response);
        throw new Error(error.message); // ??
      }
    }
  });
