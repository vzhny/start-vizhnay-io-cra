import React from 'react';
import PropTypes from 'prop-types';
import Form from '../../containers/Form/Form';
import Card from '../Card/Card';
import Backdrop from './Backdrop/Backdrop';
import styles from './Modal.module.scss';

const Modal = props => (
  <>
    <Backdrop clicked={props.clicked} />
    <div className={styles.Modal}>
      <Card title="Add Link">
        <Form clicked={props.clicked} linksUpdated={props.linksUpdated} />
      </Card>
    </div>
  </>
);

export default Modal;

Modal.propTypes = {
  clicked: PropTypes.func.isRequired,
  linksUpdated: PropTypes.func.isRequired,
};
