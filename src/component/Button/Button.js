import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary,
  outLine,
  text,
  rounded,
  small,
  large,
  children,
  className,
  lefticon,
  righticon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outLine,
    text,
    rounded,
    small,
    large,
  });
  return (
    <Comp className={classes} {...props}>
      {lefticon && <span className={cx('icon')}>{lefticon}</span>}
      {children && <span className={cx('title')}>{children}</span>}
      {righticon && <span className={cx('icon')}>{righticon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outLine: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  lefticon: PropTypes.node,
  righticon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
