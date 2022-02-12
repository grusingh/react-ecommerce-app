import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";

function useAuth() {
    const navigate = useNavigate();
    const {isAuthenticated, fullName} = useSelector(s => s.user);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated]);

    return {isAuthenticated, fullName};
}

export default useAuth;
