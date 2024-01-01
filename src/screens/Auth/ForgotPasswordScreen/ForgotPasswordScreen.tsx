import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import {ForgotPasswordNavigationProp} from '../../../types/navigation';

import {resetPassword} from 'aws-amplify/auth';

type ResetPasswordOutput = {
  username: string;
};

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm<ResetPasswordOutput>();
  const navigation = useNavigation<ForgotPasswordNavigationProp>();
  const [loading, setLoading] = useState(false);

  const onSendPressed = async ({username}: ResetPasswordOutput) => {
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const output = await resetPassword({username});
      const {nextStep} = output;
      switch (nextStep.resetPasswordStep) {
        case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
          const codeDeliveryDetails = nextStep.codeDeliveryDetails;
          Alert.alert(
            'Check your email',
            `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`,
          );
      }
      navigation.navigate('New password');
    } catch (e) {
      Alert.alert('Oops', (e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const onSignInPress = () => {
    navigation.navigate('Sign in');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <FormInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
          }}
        />

        <CustomButton
          text={loading ? 'Loading...' : 'Send'}
          onPress={handleSubmit(onSendPressed)}
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ForgotPasswordScreen;
