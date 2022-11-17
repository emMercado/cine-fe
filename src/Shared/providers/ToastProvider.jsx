

import { createContext } from "react";
import toast from "react-hot-toast";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

export const ToastContext = createContext();

const useContext = () => {
  
  const showToast = (type, title, options = {}) => {
    
    const {
      showMsg = true,
      description = '',
      position = '',
      duration = 6000,
    } = options;
    // type : error , warning , info ,success
    if (!showMsg) return;
 
    //let id;
    // eslint-disable-next-line default-case
    switch (type) {
      case 'error':
        return toast.error(
          (t) => (
            <span onClick={() => toast.dismiss(t.id)}>
              <b>{`${title}`}</b>
              {!!description && `: ${description}`}
            </span>
          ),
          {
            duration,
            style: {
              border: '1px solid #f44336',
              padding: '1rem',
              color: '#f44336',
            },
            position,
          },
        );
      case 'success':
        return toast.success(
          (t) => (
            <span onClick={() => toast.dismiss(t.id)}>
              <b>{`${title}`}</b> {`${description}`}
            </span>
          ),
          {
            duration,
            style: {
              border: '1px solid #4caf50',
              padding: '1rem',
              color: '#4caf50',
            },
            position,
          },
        );
      case 'notification':
        return toast.success(
          (t) => (
            <span onClick={() => toast.dismiss(t.id)}>
              <b>{`${title}`}</b> {`${description}`}
            </span>
          ),
          {
            duration,
            style: {
              border: '1px solid #267dbf',
              padding: '1rem',
              color: '#267dbf',
            },
            iconTheme: {
              primary: '#267dbf',
              secondary: '#FFFFFF',
            },
            icon: <NotificationsNoneIcon />,
            position,
          },
        );
      case 'loading':
        return toast.loading(
          (t) => (
            <span>
              <b>{`${title}`}</b>
            </span>
          ),
          {
            style: {
              border: '1px solid #267dbf',
              padding: '1rem',
              color: '#267dbf',
            },
            iconTheme: {
              primary: '#267dbf',
              secondary: '#FFFFFF',
            },
            position,
          },
        );
    }
  };

  const promiseToast = async (
    loadingText,
    successText,
    errorText,
    callback,
  ) => {
    const loadingToastId = showToast('loading', loadingText);

    try {
      await callback();
      toast.remove(loadingToastId);
      showToast('success', successText);
    } catch (error) {
      showToast('error', loadingToastId);
      toast.error(errorText);
    }
  };

  const cleanToasts = () => toast.remove();

  return {
    showToast,
    cleanToasts,
    promiseToast,
  };
};

export const ToastProvider = (props) => {
  const contextState = useContext();

  return (
    <ToastContext.Provider value={contextState}>
      {props.children}
    </ToastContext.Provider>
  );
};
