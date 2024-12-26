import { NavLink } from "react-router";
import './Navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';

export const Navbar = () => {
    const navItems = [
        { to: "/profile", title: "Profile", Icon: AccountCircleIcon },
        { to: "/dashboard", title: "Dashboard", Icon: DashboardCustomizeOutlinedIcon },
        { to: "/expenses", title: "Expenses", Icon: PriceChangeOutlinedIcon },
        { to: "/income", title: "Income", Icon: SavingsOutlinedIcon },
        { to: "/wallets", title: "Wallets", Icon: WalletRoundedIcon },
        { to: "/settings", title: "Settings", Icon: ManageAccountsOutlinedIcon },
    ];

    return (
        <nav className="navbar">
            {navItems.map(({ to, title, Icon }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <div className="navbar__item" title={title}>
                        <Icon />
                        <span className="navbar__tooltip">{title}</span>
                    </div>
                </NavLink>
            ))}
        </nav>
    );
};
