import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import styles from './styles/ModalButton.module.scss';

interface ModalButtonProps extends Omit<ButtonProps, 'variant'> {
  buttonVariant?: 'primary' | 'secondary' | 'danger';
}

const ModalButton: React.FC<ModalButtonProps> = ({ 
  children, 
  buttonVariant = 'primary',
  className = '',
  ...rest 
}) => {
  const getClassName = () => {
    let variantClass = '';
    
    switch (buttonVariant) {
      case 'primary':
        variantClass = styles.primary;
        break;
      case 'secondary':
        variantClass = styles.secondary;
        break;
      case 'danger':
        variantClass = styles.danger;
        break;
      default:
        variantClass = styles.primary;
    }
    
    return `${styles.button} ${variantClass} ${className}`;
  };

  return (
    <Button 
      className={getClassName()}
      variant="contained"
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ModalButton; 