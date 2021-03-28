import styled from 'styled-components';
import { Switch } from 'antd';

// eslint-disable-next-line import/prefer-default-export
export const ComponentWrapper = styled(Switch)`
  height: 17px;
  min-width: 43px;
  min-width: 43px;
  background-color: #b5b5b5;

  .ant-switch-handle {
    top: -4px;
    width: 24px;
    height: 24px;
    left: 0;

    :before {
      background-color: #919191;
      border-radius: 50%;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  }

  .ant-switch-inner {
    color: #444141;
    font-size: 10px;
    line-height: 17px;
    margin: 0 6px 0 26px;
  }

  &.ant-switch-checked {
    background-color: #0f213c;

    .ant-switch-handle {
      left: auto;
      right: 0;

      :before {
        background-color: #01c8f8;
      }
    }

    .ant-switch-inner {
      color: #fff;
      margin: 0 26px 0 6px;
    }
  }
`;
