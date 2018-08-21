import styled, {StyledComponentClass} from 'styled-components';
import {Fragment} from 'react';
import * as React from 'react';

const UnstyledNavbar = (props:NavbarProps) => {
    const navbar_className = "navbar"
    return (
      <Fragment>
        <nav className={navbar_className}>
          {props.children}
        </nav>
      </Fragment>
    )
}

export interface NavbarProps{
  height?:number,
  bg?: string,
  children?:any
}

export let Navbar = styled(UnstyledNavbar)`
  height: ${ props => props.height ? props.height+'px' : '60px'}
  background-color: ${props => props.bg ? props.bg : 'white'}
`;
