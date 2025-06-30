import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '@/assets/styles/home.styles'
import { COLORS } from '@/constants/colors'

export default function BalanceCard() {
  return (
    <View style={styles.balanceCard}>
      <Text style={styles.balanceTitle}>Total Balance</Text>
      <Text style={styles.balanceAmount}>$12,345.67</Text>
      <View style={styles.balanceStats}>
        <View style={styles.balanceStatItem}>
            <Text style={styles.balanceStatLabel}>Income</Text>
            <Text style={[styles.balanceStatAmount, {color:COLORS.income}]}>+$1200</Text>

        </View>
        <View style={[styles.balanceStatItem, styles.statDivider]}/>
            <View style={styles.balanceStatItem}>
            <Text style={styles.balanceStatLabel}>Expense</Text>
            <Text style={[styles.balanceStatAmount, {color:COLORS.expense}]}>-$200</Text>
            </View>

        

      </View>
    </View>
  )
}