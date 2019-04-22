import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { search_focus, search_blur } from '../../actions';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style';

class Header extends Component {  

  render() {
    const { focused, handleOnFocus, handleOnBlur } = this.props;

    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>Aa</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <Fragment>
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                >
                </NavSearch>
                <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe611;</i>
              </Fragment>
            </CSSTransition>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleOnFocus() {
      console.log('rrr');
      // const action = {
      //   type: 'SEARCH_FOCUS'
      // }
      dispatch(search_focus());
    },
  
    handleOnBlur() {
      // const action = {
      //   type: 'SEARCH_BLUR'
      // }
      dispatch(search_blur());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);