/** @jsx jsx */
import { jsx, NavLink as MenuLink, Link as A } from "theme-ui";
import NextLink from "next/link";

export function NavLink({ path, label, children, ...rest }) {
  return <h1>NavLink</h1>;
}
// if there is logo then display esle display lable
export function Link({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path}>
      {/* //if there is children then show them else display label */}
      {children || label}
    </A>
  );
}
