import { StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import React, { useState } from 'react'
import Progress from '@/componenets/progress'
import Cart from '@/componenets/cart'
import { Link } from 'expo-router'
import Bottons from '@/componenets/button'
import job from '@/assets/data/data'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Game() {

  const [groupe, setGroupe] = useState(false) // bleu false  volilce true


  const [grope_1, setGrope_1] = useState('0')
  const [grope_2, setGrope_2] = useState('0')


  // job
  const [jobChoised, setJobChiosed] = useState('')

  // function of logic game

  const hundlerChangeGroupePlay = () => {
    if (groupe == true) {
      setGroupe(false)
    }
    else if (groupe === false) {
      setGroupe(true)
    }
  }

  const hundlerSucssece = () => {
    if (groupe) {
      setGrope_1((Number(grope_1) + 1).toString())
    } else if (groupe === false) {
      setGrope_2((Number(grope_2) + 1).toString())
    }
    hundlerChangeGroupePlay()
    setJobChiosed(refrechJob())
  }

  const hundlerIngnor = () => {
    if (groupe) {
      setGrope_1('0');
    } else {
      setGrope_2('0');
    }

    hundlerChangeGroupePlay()
    setJobChiosed(refrechJob())
  }
  // fonctions of random job
  const refrechJob = () => {
    let rand = Math.floor(Math.random() * 51)
    return job[rand]

  }

  return (
    <SafeAreaView style={{ backgroundColor: '#232E53', flex: 1 }}>
      <View style={{ backgroundColor: jobChoised === '' ? '#232E53' : groupe ? '#3EA5F9' : '#6241F9', height: 60, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#eee', fontSize: 40 }}>{'10'}</Text>
        <View style={{ flexDirection: 'row', right: 150, top: -30 }}>
          <Link style={{ fontSize: 20, color: '#eee' }} href={'/(game)/mainGame'}> {'<--'} </Link>
        </View>

      </View>
      <View style={styles.progress}>
        <Progress color='#3EA5F9' progress={grope_1} ></Progress>
        <Progress color='#6241F9' progress={grope_2} ></Progress>
      </View>

      <Cart job={jobChoised != '' ? jobChoised : 'اضغط على بدأ'} />

      <View style={styles.progress}>
        <Bottons name='فشل' color='#6241F9' onPress={() => hundlerIngnor()} disabled={jobChoised === '' ? true : false} />
        <Bottons name={jobChoised ? 'نجاح' : 'ابدا'} color='#3EA5F9' onPress={() => hundlerSucssece()} disabled={false} />
      </View>
      <Text style={{ marginTop: 150, fontSize: 9 }}>made from china from morroco from la cosin a mison de batha mohamed </Text>




    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  progress: {
    flexDirection: 'row',
    gap: 100
  },

})