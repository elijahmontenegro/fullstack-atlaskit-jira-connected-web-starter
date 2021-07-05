import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 0 auto;
  padding: 0px 40px !important;
  height: auto;
  max-width: calc(100% - 40px);
  min-width: calc(8.33333% - 40px);
  width: 960px;
  overflow-wrap: break-word;
  flex-direction: column;
`;

export {
  Container
};