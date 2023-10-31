// components/TokenExpiryModal.js

import React from 'react'
import { Modal, Button } from 'antd'

const TokenExpiryModal = ({ isVisible, onRefresh, onClose }) => {
  return (
    <Modal
      title='Session Expired'
      open={isVisible}
      onCancel={onClose}
      footer={[
        <Button key='back' onClick={onClose}>
          Close
        </Button>,
        <Button key='submit' type='primary' onClick={onRefresh}>
          Refresh Session
        </Button>,
      ]}
    >
      <p>Your session has expired. Would you like to refresh it?</p>
    </Modal>
  )
}

export default TokenExpiryModal
