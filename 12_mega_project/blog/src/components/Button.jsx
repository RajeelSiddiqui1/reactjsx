import React from 'react';

function Button({
  children,
  type = 'button',
  bgColor = 'bg-blue-500',
  textColor = 'text-white',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={`inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full ${bgColor} ${textColor} ${className}`}
      {...props} 
    >
      {children}
    </button>
  );
}

export default Button;
