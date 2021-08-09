import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '@atlaskit/spinner';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import ProgressContainer from './ProgressContainer';

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
        {props.isFirstTimeUser && 
          <Modal
            width="medium"
            heading="Welcome Elijah Montenegro!"
            // actions={firstTimeActions}
          />
        }
      </ModalTransition>
    </>
  )
};

const mapStateToProps = state => ({
  isRedirecting: state.navigation.isRedirecting,
  // isFirstTimeUser: true,
  message: state.navigation.message
});

export default connect(mapStateToProps)(CommonLayer);