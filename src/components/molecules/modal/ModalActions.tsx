import React from 'react';
import styles from './styles/ModalActions.module.scss';

interface ModalActionsProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const ModalActions: React.FC<ModalActionsProps> = ({ 
  children, 
  align = 'right', 
  className = '' 
}) => {
  const getClassName = () => {
    let alignClass = '';
    
    switch (align) {
      case 'left':
        alignClass = styles.left;
        break;
      case 'center':
        alignClass = styles.center;
        break;
      case 'right':
        alignClass = styles.right;
        break;
      default:
        alignClass = styles.right;
    }
    
    return `${styles.actions} ${alignClass} ${className}`;
  };

  return (
    <div className={getClassName()}>
      {children}
    </div>
  );
};

export default ModalActions; 