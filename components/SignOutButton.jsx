import { styles } from '@/assets/styles/home.styles'
import { useClerk } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import { Alert, Text, TouchableOpacity } from 'react-native'
import {style } from '@/assets/styles/home.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/colors'

export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk()
  // const handleSignOut = async () => {
  //   try {
  //     await signOut()
  //     // Redirect to your desired page
  //     Linking.openURL(Linking.createURL('/'))
  //   } catch (err) {
  //     // See https://clerk.com/docs/custom-flows/error-handling
  //     // for more info on error handling
  //     console.error(JSON.stringify(err, null, 2))
  //   }
  // }

  const handleSignOut = async () => {
    Alert.alert("Log Out", "Are you sure you want to sign out?", [
     {text: "Cancel", style: "cancel"},
     {text: "Log Out", style:"destructive", onPress: signOut},
    ])
  }
  return (
    <TouchableOpacity onPress={handleSignOut} style={styles.logoutButton}>
     <Ionicons name='log-out-outline' size={20} color={COLORS.text}/>
    </TouchableOpacity>
  )
}