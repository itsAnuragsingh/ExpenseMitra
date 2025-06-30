import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { useUser } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';

const CATEGORIES = [
{ id: "food", name: "Food & Drinks", icon: "fast-food" },
{ id: "shopping", name: "Shopping", icon: "cart" },
{ id: "transportation", name: "Transportation", icon: "car" },
{ id: "entertainment", name: "Entertainment", icon: "film" },
{ id: "bills", name: "Bills", icon: "receipt" },
{ id: "income", name: "Income", icon: "cash" },
{ id: "other", name: "Other", icon: "ellipsis-horizontal" }
];
const CreateScreen = () => {

  const {user} = useUser()
  const router = useRouter()
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCreate = ()=>{
    if(!title.trim()) return Alert.alert("Error", "Title is required")
    if(!amount || isNaN(parseFloat(amount))) return Alert.alert("Error", "Amount is required and must be a number")
    if(!selectedCategory) return Alert.alert("Error", "Please select a category")
  }
  return (
    <View>
      <Text>create</Text>
    </View>
  )
}

export default CreateScreen