

export interface FormProps {
  className?: string;
  isLoading: boolean;
  onSubmit?: (evt: any) => void;
  onFinish: (userData: UserDataType) => Promise<void>;
}

