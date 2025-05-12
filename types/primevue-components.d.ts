// Form
import AutoComplete from 'primevue/autocomplete';
import CascadeSelect from 'primevue/cascadeselect';
import Checkbox from 'primevue/checkbox';
import ColorPicker from 'primevue/colorpicker';
import DatePicker from 'primevue/datepicker';
import Editor from 'primevue/editor';
import FloatLabel from 'primevue/floatlabel';
import IconField from 'primevue/iconfield';
import IftaLabel from 'primevue/iftalabel';
import InputGroup from 'primevue/inputgroup';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputOtp from 'primevue/inputotp';
import InputText from 'primevue/inputtext';
import KeyFilter from 'primevue/keyfilter';
import Knob from 'primevue/knob';
import Listbox from 'primevue/listbox';
import MultiSelect from 'primevue/multiselect';
import Password from 'primevue/password';
import RadioButton from 'primevue/radiobutton';
import Rating from 'primevue/rating';
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import Slider from 'primevue/slider';
import Textarea from 'primevue/textarea';
import ToggleButton from 'primevue/togglebutton';
import ToggleSwitch from 'primevue/toggleswitch';
import TreeSelect from 'primevue/treeselect';
import InputIcon from 'primevue/inputicon';
// Button
import Button from 'primevue/button';
import SpeedDial from 'primevue/speeddial';
import SplitButton from 'primevue/splitbutton';
// Data
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import Paginator from 'primevue/paginator';
import PickList from 'primevue/picklist';
import Timeline from 'primevue/timeline';
import Tree from 'primevue/tree';
import TreeTable from 'primevue/treetable';
import VirtualScroller from 'primevue/virtualscroller';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
// Panel
import Accordion from 'primevue/accordion';
import Card from 'primevue/card';
import DeferredContent from 'primevue/deferredcontent';
import Divider from 'primevue/divider';
import Fieldset from 'primevue/fieldset';
import Panel from 'primevue/panel';
import ScrollPanel from 'primevue/scrollpanel';
import Splitter from 'primevue/splitter';
import Stepper from 'primevue/stepper';
import Steps from 'primevue/steps';
import TabMenu from 'primevue/tabmenu';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Toolbar from 'primevue/toolbar';
import SplitterPanel from 'primevue/splitterpanel';
// Overlay
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import Dialog from 'primevue/dialog';
import Drawer from 'primevue/drawer';
import DynamicDialog from 'primevue/dynamicdialog';
import Popover from 'primevue/popover';
// File
import FileUpload from 'primevue/fileupload';
// Menu
import Breadcrumb from 'primevue/breadcrumb';
import ContextMenu from 'primevue/contextmenu';
import Dock from 'primevue/dock';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import MegaMenu from 'primevue/megamenu';
import PanelMenu from 'primevue/panelmenu';
import TieredMenu from 'primevue/tieredmenu';
// Message
import Message from 'primevue/message';
import Toast from 'primevue/toast';
// Media
import Carousel from 'primevue/carousel';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import ImageCompare from 'primevue/imagecompare';
// Misc
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';
import BlockUI from 'primevue/blockui';
import Chip from 'primevue/chip';
import Fluid from 'primevue/fluid';
import Inplace from 'primevue/inplace';
import MeterGroup from 'primevue/metergroup';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import ScrollTop from 'primevue/scrolltop';
import Skeleton from 'primevue/skeleton';
import Tag from 'primevue/tag';
import Terminal from 'primevue/terminal';


declare module '@vue/runtime-core' {
    export interface GlobalComponents {
      // Form
      'p-auto-complete': typeof AutoComplete;
      'p-cascade-select': typeof AutoComplete;
      'p-checkbox': typeof Checkbox;
      'p-color-picker': typeof ColorPicker;
      'p-date-picker': typeof DatePicker;
      'p-editor': typeof Editor;
      'p-float-label': typeof FloatLabel;
      'p-icon-field': typeof IconField;
      'p-ifta-label': typeof IconField;
      'p-input-group': typeof InputGroup;
      'p-input-mask': typeof InputMask;
      'p-input-number': typeof InputNumber;
      'p-input-otp': typeof InputOtp;
      'p-input-text': typeof InputText;
      'p-key-filter': typeof KeyFilter;
      'p-knob': typeof Knob;
      'p-listbox': typeof Listbox;
      'p-multi-select': typeof MultiSelect;
      'p-password': typeof Password;
      'p-radio-button': typeof RadioButton;
      'p-rating': typeof Rating;
      'p-select': typeof Select;
      'p-select-button': typeof SelectButton;
      'p-slider': typeof Slider;
      'p-textarea': typeof Textarea;
      'p-toggle-button': typeof ToggleButton;
      'p-toggle-switch': typeof ToggleSwitch;
      'p-tree-select': typeof TreeSelect;
      'p-input-icon': typeof InputIcon;
      // Button
      'p-button': typeof Button;
      'p-speed-dial': typeof SpeedDial;
      'p-split-button': typeof SplitButton;
      // Data
      'p-data-table': typeof DataTable;
      'p-data-view': typeof DataView;
      'p-order-list': typeof OrderList;
      'p-organization-chart': typeof OrganizationChart;
      'p-paginator': typeof Paginator;
      'p-pick-list': typeof PickList;
      'p-timeline': typeof Timeline;
      'p-tree': typeof Tree;
      'p-tree-table': typeof TreeTable;
      'p-virtual-scroller': typeof VirtualScroller;
      'p-column': typeof Column;
      'p-column-group': typeof ColumnGroup;
      'p-row': typeof Row;
      // Panel
      'p-accordion': typeof Accordion;
      'p-card': typeof Card;
      'p-deferred-content': typeof DeferredContent;
      'p-divider': typeof Divider;
      'p-fieldset': typeof Fieldset;
      'p-panel': typeof Panel;
      'p-scroll-panel': typeof ScrollPanel;
      'p-splitter': typeof Splitter;
      'p-stepper': typeof Stepper;
      'p-steps': typeof Steps;
      'p-tab-menu': typeof TabMenu;
      'p-tabs': typeof Tabs;
      'p-tab-list': typeof TabList;
      'p-tab': typeof Tab;
      'p-tab-panels': typeof TabPanels;
      'p-tab-panel': typeof TabPanel;
      'p-toolbar': typeof Toolbar;
      'p-splitter-panel': typeof SplitterPanel
      // Overlay
      'p-confirm-dialog': typeof ConfirmDialog;
      'p-confirm-popup': typeof ConfirmPopup;
      'p-dialog': typeof Dialog;
      'p-drawer': typeof Drawer;
      'p-dynamic-dialog': typeof DynamicDialog;
      'p-popover': typeof Popover;
      // File
      'p-file-upload': typeof FileUpload;
      // Menu
      'p-breadcrumb': typeof Breadcrumb;
      'p-context-menu': typeof ContextMenu;
      'p-dock': typeof Dock;
      'p-menu': typeof Menu;
      'p-menubar': typeof Menubar;
      'p-mega-menu': typeof MegaMenu;
      'p-panel-menu': typeof PanelMenu;
      'p-tiered-menu': typeof TieredMenu;
      // Message
      'p-message': typeof Message;
      'p-toast': typeof Toast;
      // Media
      'p-carousel': typeof Carousel;
      'p-galleria': typeof Galleria;
      'p-image': typeof Image;
      'p-image-compare': typeof ImageCompare;
      // Misc
      'p-avatar': typeof Avatar;
      'p-avatar-group': typeof AvatarGroup;
      'p-badge': typeof Badge;
      'p-overlay-badge': typeof OverlayBadge;
      'p-block-UI': typeof BlockUI;
      'p-chip': typeof Chip;
      'p-fluid': typeof Fluid;
      'p-inplace': typeof Inplace;
      'p-meter-group': typeof MeterGroup;
      'p-progress-bar': typeof ProgressBar;
      'p-progress-spinner': typeof ProgressSpinner;
      'p-scroll-top': typeof ScrollTop;
      'p-skeleton': typeof Skeleton;
      'p-tag': typeof Tag;
      'p-terminal': typeof Terminal;
    }
  }


  
  export {};