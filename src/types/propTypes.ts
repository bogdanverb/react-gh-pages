export interface PropTypeItem {
  id: string;
  name: string;
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
  required: boolean;
  defaultValue?: any;
}

export interface PropTypeState {
  items: PropTypeItem[];
}
