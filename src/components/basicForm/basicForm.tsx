import React from 'react';
import styles from "./basicForm.module.scss"

function BasicForm() {
  return (
    <div className={styles.basicForm}>
      <input placeholder="input1" />
      <input placeholder="input2" />
      <input placeholder="input3" />
    </div>
  );
}

export default BasicForm;
