import { useEffect, useRef } from "react";

interface FilterData {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

interface FilterMenuProps {
  onClose: () => void;
  onFilter: (filters: FilterData) => void;
  position: {
    top: number;
    left?: number;
    right?: number;
  };
}

export default function FilterMenu({
  onClose,
  onFilter,
  position,
}: FilterMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const adjustMenuPosition = () => {
      if (menuRef.current) {
        const rect = menuRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.bottom > viewportHeight) {
          const newTop = position.top - rect.height - 40;
          menuRef.current.style.top = `${newTop}px`;
        }
      }
    };

    adjustMenuPosition();

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", adjustMenuPosition);
    window.addEventListener("resize", adjustMenuPosition);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", adjustMenuPosition);
      window.removeEventListener("resize", adjustMenuPosition);
    };
  }, [onClose, position]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const filters: FilterData = {
      organization: (formData.get("organization") as string) || "",
      username: (formData.get("username") as string) || "",
      email: (formData.get("email") as string) || "",
      date: (formData.get("date") as string) || "",
      phoneNumber: (formData.get("phoneNumber") as string) || "",
      status: (formData.get("status") as string) || "",
    };
    onFilter(filters);
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    onClose();
  };

  const style = {
    top: `${position.top}px`,
    ...(position.left !== undefined ? { left: `${position.left}px` } : {}),
    ...(position.right !== undefined ? { right: `${position.right}px` } : {}),
  };

  return (
    <div className="filter-menu" ref={menuRef} style={style}>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="filter-menu__field">
          <label>Organization</label>
          <select name="organization">
            <option value="">Select</option>
          </select>
        </div>

        <div className="filter-menu__field">
          <label>Username</label>
          <input type="text" name="username" placeholder="User" />
        </div>

        <div className="filter-menu__field">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" />
        </div>

        <div className="filter-menu__field">
          <label>Date</label>
          <input type="date" name="date" />
        </div>

        <div className="filter-menu__field">
          <label>Phone Number</label>
          <input type="tel" name="phoneNumber" placeholder="Phone Number" />
        </div>

        <div className="filter-menu__field">
          <label>Status</label>
          <select name="status">
            <option value="">Select</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
            <option value="blacklisted">Blacklisted</option>
          </select>
        </div>

        <div className="filter-menu__buttons">
          <button
            type="button"
            onClick={handleReset}
            className="filter-menu__button--reset"
          >
            Reset
          </button>
          <button type="submit" className="filter-menu__button--filter">
            Filter
          </button>
        </div>
      </form>
    </div>
  );
}
