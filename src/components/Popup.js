import Modal from 'antd/lib/modal'
import { useState } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

export function Popup({ trigger, children }) {
  const [modalVisible, setModalVisible] = useState(false)

  function onModalCancel() {
    setModalVisible(false)
  }

  function showModal() {
    setModalVisible(true)
  }

  return (
    <>
      <TouchableOpacity onPress={showModal}>{trigger}</TouchableOpacity>
      <Modal
        centered
        footer={null}
        width={550}
        visible={modalVisible}
        onCancel={onModalCancel}
      >
        <View style={styles.container}>{children}</View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    maxHeight: 1000,
    overflowY: 'auto'
  }
})
