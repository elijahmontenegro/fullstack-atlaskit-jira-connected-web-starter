import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '@atlaskit/spinner';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';

const CommonLayer = ({
  children: app,
  ...props
}) => {
  
  return (
    <>
      {app}
      <ModalTransition>
        {props.isRedirecting && 
          <Modal
            width="small"
            heading={(
              <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                <Spinner size="large" /> 
                <span style={{ marginLeft: 20 }}/>
                {props.message}
              </div>
            )}
          />
        }
      </ModalTransition>
    </>
  )
};


const mapStateToProps = state => ({
  isRedirecting: state.navigation.isRedirecting,
  message: state.navigation.message
});

export default connect(mapStateToProps)(CommonLayer);