import {StyleSheet, Text, View, ScrollView} from 'react-native'
import React from 'react'
import {themeColors} from '../../helpers/themeColors'

const PrivacyPolicy = (): JSX.Element => {
  return (
    <View>
      <View style={styles.ViewCenter}>
        <ScrollView
          style={styles.scrollViewCenter}
          contentContainerStyle={styles.contentContainerCenter}>
          <Text style={styles.title}>Terms of Service</Text>
          <Text style={styles.paragraph}>
            Meta builds technologies and services that enable people to connect
            with each other, build communities and grow businesses. These Terms
            govern your use of Facebook, Messenger and the other products,
            features, apps, services, technologies and software that we offer
            (the Meta Products or Products), except where we expressly state
            that separate terms (and not these) apply. These Products are
            provided to you by Meta Platforms, Inc.
          </Text>
          <Text style={styles.paragraph}>
            We don't charge you to use Facebook or the other products and
            services covered by these Terms, unless we state otherwise. Instead,
            businesses, organisations and other persons pay us to show you ads
            for their products and services. By using our Products, you agree
            that we can show you ads that we think may be relevant to you and
            your interests. We use your personal data to help determine which
            personalised ads to show you.
          </Text>
          <Text style={styles.paragraph}>
            We don't sell your personal data to advertisers, and we don't share
            information that directly identifies you (such as your name, email
            address or other contact information) with advertisers unless you
            give us specific permission. Instead, advertisers can tell us things
            such as the kind of audience that they want to see their ads, and we
            show those ads to people who may be interested. We provide
            advertisers with reports about the performance of their ads that
            help them understand how people are interacting with their content.
            See Section 2 below to learn more about how personalised advertising
            under these Terms works on the Meta Products.
          </Text>
          <Text style={styles.paragraph}>
            Our Privacy Policy explains how we collect and use your personal
            data to determine some of the ads that you see and provide all of
            the other services described below. You can also go to your settings
            pages of the relevant Meta Product at any time to review the privacy
            choices that you have about how we use your data.
          </Text>
        </ScrollView>
      </View>
    </View>
  )
}

export default PrivacyPolicy

const styles = StyleSheet.create({
  ViewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  scrollViewCenter: {
    height: 290,
    width: '90%',
    backgroundColor: themeColors.darkgray,
    borderRadius: 5,
  },
  contentContainerCenter: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginVertical: 10,
  },
  paragraph: {
    textAlign: 'center',
    lineHeight: 20,
    marginVertical: 5,
    color: 'white',
    padding: 10,
  },
})
