import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/assets/styles/home.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/colors'
const CATEGORY_ICONS ={
    "Food Drinks": "fast—food",
    Shopping: "cart",
    Transportation: "car",
    Entertainment: "film" ,
    Bills: "receipt",
    Income: "cash" ,
    Other: "ellipsis-horizontal", 
}
const TransactionItem = ({item , onDelete}) => {
    const isIncome = item.amount > 0
    const iconName = CATEGORY_ICONS[item.category] || "ellipsis-horizontal"
  return (
    <View style={styles.transactionCard} key={item.id}>
      <TouchableOpacity style={styles.transactionContent}>
         <View style={styles.categoryIconContainer}>
            <Ionicons name={iconName} size={22} color={isIncome? COLORS.income : COLORS.expense}/>
         </View>
         <View style={styles.transactionLeft}>
            <Text style={styles.transactionTitle}>{item.title}</Text>
            <Text style={styles.transactionCategory}>{item.category}</Text>
         </View>
         <View style={styles.transactionRight}>
            <Text style={[styles.transactionAmount, {color: isIncome ? COLORS.income : COLORS.expense}]}>
                {isIncome ? '+' : '-'}${Math.abs(item.amount).toLocaleString()}
            </Text>
            <Text style={styles.transactionDate}>
                {new Date(item.createdAt).toLocaleDateString()}
            </Text>
         </View>
      </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.deleteButton}>
            <Ionicons name="trash-outline" size={24} color={COLORS.expense} />
        </TouchableOpacity>
    </View>
  )
}

export default TransactionItem