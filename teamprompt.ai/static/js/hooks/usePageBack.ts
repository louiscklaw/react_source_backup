import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const usePageBack = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return useCallback(() => {
        if (location.state?.from) {
            navigate(-1);
        } else {
            navigate('/');
        }
    }, [location.state?.from]);
}

export default usePageBack;