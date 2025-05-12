import {
    PrimeVue,
    // Form
    AutoComplete,
    CascadeSelect,
    Checkbox,
    ColorPicker,
    DatePicker,
    Editor,
    FloatLabel,
    IconField,
    IftaLabel,
    InputGroup,
    InputMask,
    InputNumber,
    InputOtp,
    InputText,
    KeyFilter,
    Knob,
    Listbox,
    MultiSelect,
    Password,
    RadioButton,
    Rating,
    Select,
    SelectButton,
    Slider,
    Textarea,
    ToggleButton,
    ToggleSwitch,
    TreeSelect,
    InputIcon,
    // Button
    Button,
    SpeedDial,
    SplitButton,
    // Data
    DataTable,
    DataView,
    OrderList,
    OrganizationChart,
    Paginator,
    PickList,
    Timeline,
    Tree,
    TreeTable,
    VirtualScroller,
    Column,
    ColumnGroup,
    Row,
    // Panel
    Accordion,
    Card,
    DeferredContent,
    Divider,
    Fieldset,
    Panel,
    ScrollPanel,
    Splitter,
    Stepper,
    Steps,
    TabMenu,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Toolbar,
    SplitterPanel,
    ConfirmDialog,
    ConfirmPopup,
    Dialog,
    Drawer,
    DynamicDialog,
    Popover,
    // File
    FileUpload,
    // Menu
    Breadcrumb,
    ContextMenu,
    Dock,
    Menu,
    Menubar,
    MegaMenu,
    PanelMenu,
    TieredMenu,
    // Message
    Message,
    Toast,
    Carousel,
    Galleria,
    Image,
    ImageCompare,
    // Misc
    Avatar,
    AvatarGroup,
    Badge,
    OverlayBadge,
    BlockUI,
    Chip,
    Fluid,
    Inplace,
    MeterGroup,
    ProgressBar,
    ProgressSpinner,
    ScrollTop,
    Skeleton,
    Tag,
    Terminal,
    // Service
    DialogService,
    ToastService,
    TerminalService,
    ConfirmationService,
    // Directive
    Ripple,
    StyleClass,
    Tooltip,
} from './components';
import Aura from '@primeuix/themes/aura';

export default function regPrimeVue(app) {
    const translate = app.config.globalProperties.$tm;
    app.use(PrimeVue, {
        ripple: true,
        locale: translate('primeVue'),
        theme: {
            preset: Aura,
            options: {
                prefix: 'p',
                darkModeSelector: '.dark',
            },
        },
    });
    // Service
    app.use(DialogService);
    app.use(ToastService);
    app.use(TerminalService);
    app.use(ConfirmationService);
    // Directive
    app.directive('ripple', Ripple);
    app.directive('tooltip', Tooltip);
    app.directive('styleclass', StyleClass);
    // Form
    app.component('PAutoComplete', AutoComplete);
    app.component('PCascadeSelect', CascadeSelect);
    app.component('PCheckbox', Checkbox);
    app.component('PColorPicker', ColorPicker);
    app.component('PDatePicker', DatePicker);
    app.component('PEditor', Editor);
    app.component('PFloatLabel', FloatLabel);
    app.component('PIconField', IconField);
    app.component('PIftaLabel', IftaLabel);
    app.component('PInputGroup', InputGroup);
    app.component('PInputMask', InputMask);
    app.component('PInputNumber', InputNumber);
    app.component('PInputOtp', InputOtp);
    app.component('PInputText', InputText);
    app.component('PKeyFilter', KeyFilter);
    app.component('PKnob', Knob);
    app.component('PListbox', Listbox);
    app.component('PMultiSelect', MultiSelect);
    app.component('PPassword', Password);
    app.component('PRadioButton', RadioButton);
    app.component('PRating', Rating);
    app.component('PSelect', Select);
    app.component('PSelectButton', SelectButton);
    app.component('PSlider', Slider);
    app.component('PTextarea', Textarea);
    app.component('PToggleButton', ToggleButton);
    app.component('PToggleSwitch', ToggleSwitch);
    app.component('PTreeSelect', TreeSelect);
    app.component('PInputIcon', InputIcon);
    // Button
    app.component('PButton', Button);
    app.component('PSpeedDial', SpeedDial);
    app.component('PSplitButton', SplitButton);
    // Data
    app.component('PDataTable', DataTable);
    app.component('PDataView', DataView);
    app.component('POrderList', OrderList);
    app.component('POrganizationChart', OrganizationChart);
    app.component('PPaginator', Paginator);
    app.component('PPickList', PickList);
    app.component('PTimeline', Timeline);
    app.component('PTree', Tree);
    app.component('PTreeTable', TreeTable);
    app.component('PVirtualScroller', VirtualScroller);
    app.component('PColumn', Column);
    app.component('PColumnGroup', ColumnGroup);
    app.component('PRow', Row);
    // Panel
    app.component('PAccordion', Accordion);
    app.component('PCard', Card);
    app.component('PDeferredContent', DeferredContent);
    app.component('PDivider', Divider);
    app.component('PFieldset', Fieldset);
    app.component('PPanel', Panel);
    app.component('PScrollPanel', ScrollPanel);
    app.component('PSplitter', Splitter);
    app.component('PStepper', Stepper);
    app.component('PSteps', Steps);
    app.component('PTabMenu', TabMenu);
    app.component('PTabs', Tabs);
    app.component('PTabList', TabList);
    app.component('PTab', Tab);
    app.component('PTabPanels', TabPanels);
    app.component('PTabPanel', TabPanel);
    app.component('PToolbar', Toolbar);
    app.component('PSplitterPanel', SplitterPanel);
    app.component('PConfirmDialog', ConfirmDialog);
    app.component('PConfirmPopup', ConfirmPopup);
    app.component('PDialog', Dialog);
    app.component('PDrawer', Drawer);
    app.component('PDynamicDialog', DynamicDialog);
    app.component('PPopover', Popover);
    // File
    app.component('PFileUpload', FileUpload);
    // Menu
    app.component('PBreadcrumb', Breadcrumb);
    app.component('PContextMenu', ContextMenu);
    app.component('PDock', Dock);
    app.component('PMenu', Menu);
    app.component('PMenubar', Menubar);
    app.component('PMegaMenu', MegaMenu);
    app.component('PPanelMenu', PanelMenu);
    app.component('PTieredMenu', TieredMenu);
    // Message
    app.component('PMessage', Message);
    app.component('PToast', Toast);
    app.component('PCarousel', Carousel);
    app.component('PGalleria', Galleria);
    app.component('PImage', Image);
    app.component('PImageCompare', ImageCompare);
    // Misc
    app.component('PAvatar', Avatar);
    app.component('PAvatarGroup', AvatarGroup);
    app.component('PBadge', Badge);
    app.component('POverlayBadge', OverlayBadge);
    app.component('PBlockUI', BlockUI);
    app.component('PChip', Chip);
    app.component('PFluid', Fluid);
    app.component('PInplace', Inplace);
    app.component('PMeterGroup', MeterGroup);
    app.component('PProgressBar', ProgressBar);
    app.component('PProgressSpinner', ProgressSpinner);
    app.component('PScrollTop', ScrollTop);
    app.component('PSkeleton', Skeleton);
    app.component('PTag', Tag);
    app.component('PTerminal', Terminal);
}
