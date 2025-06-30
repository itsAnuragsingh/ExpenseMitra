import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import BalanceCard from '@/components/BalanceCard'
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { SignOutButton } from '@/components/SignOutButton'
import { styles } from '@/assets/styles/home.styles'
import TransactionItem from '@/components/TransactionItem'
import { useState } from 'react'
import NoTransactionsFound from '@/components/NoTransactionsFound'


export default function Page() {
  const { user } = useUser()
  const [transaction, setTransaction]=useState([
  {
    id: 1,
    title: "Pizza at Domino's",
    category: "FoodDrinks",
    amount: -450,
    createdAt: "2025-06-25T18:30:00Z"
  },
  {
    id: 2,
    title: "Amazon Order - Headphones",
    category: "Shopping",
    amount: -1999,
    createdAt: "2025-06-24T15:10:00Z"
  },
  {
    id: 3,
    title: "Salary",
    category: "Income",
    amount: 40000,
    createdAt: "2025-06-23T08:20:00Z"
  },
  {
    id: 4,
    title: "Netflix Subscription",
    category: "Entertainment",
    amount: -649,
    createdAt: "2025-06-22T22:00:00Z"
  },
  {
    id: 5,
    title: "Freelance Web Dev Payment",
    category: "Income",
    amount: 12000,
    createdAt: "2025-06-21T10:45:00Z"
  }
])
const router = useRouter()

const handleDelete = (id) => {
  Alert.alert(
    "Delete Transaction",
    "Are you sure you want to delete this transaction?",[
    {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Delete",
        onPress: () => {
            setTransaction((prevTransactions) => prevTransactions.filter((item) => item.id !== id))

        },
        style: "destructive"
      }
    ]
  )
}
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={require("../../assets/images/logo.png") } style={styles.headerLogo} contentFit ='contain'/>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.usernameText}>
                {user?.emailAddresses[0]?.emailAddress.split("@")[0] || user?.primaryEmailAddressId || 'Guest'}
              </Text>

            </View>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.addButton} onPress={() => router.push('/create')}>
              <Ionicons name='add' size={20} color="#ffffff"/>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <SignOutButton />
          </View>

        </View>
        <BalanceCard/>

      </View>
      <FlatList
      style={styles.transactionList}
      contentContainerStyle={styles.transactionListContent}
      data={transaction}
      renderItem={({item})=>(
        <TransactionItem item={item} onDelete={handleDelete}/>
      )}
      ListEmptyComponent={<NoTransactionsFound  />}
      />
    </View>
  )
}