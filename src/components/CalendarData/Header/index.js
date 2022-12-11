import React from "react";
import styled from "styled-components";

const DivWrapper = styled('div')`
	background-color: #2A2B2D;
	height: 36px;
	display: flex;
	align-items: center;
`;
const Link = styled('a')`
	text-decoration: none;
	color: #989ca3;
	font-weight: 100;
	margin-left: 16px;
`;

export default function Header() {
  return (
    <DivWrapper>
		<Link href="/">&lt; My Pizza &gt;</Link>
	</DivWrapper>

  )
}
