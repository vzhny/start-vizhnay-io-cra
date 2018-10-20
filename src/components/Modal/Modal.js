import React from 'react';
import Form from '../../containers/Form/Form';
import Card from '../Card/Card';
import Backdrop from './Backdrop/Backdrop';
import styles from './Modal.module.scss';

const Modal = props => (
  <>
    <Backdrop toggleModal={props.clicked} />
    <div className={styles.Modal}>
      <Card>
        <Form clicked={props.clicked} />
      </Card>
    </div>
  </>
);

export default Modal;