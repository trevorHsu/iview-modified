export default{
    data () {
        return {
            shortcutMenu: [],
            shortcutMenuDropdown: false,
        };
    },
    methods: {
        shortcutMenuDataHandler: function(){
            this.shortcutMenu.splice(0);

            if(this.options && (this.options.shortcuts instanceof Array)){
                this.shortcutMenu.push(...this.options.shortcuts);
            }
        },
        shortcutContainerClickHandler: function(menuVisible){
            if(menuVisible) this.visible = false;
        },
        shortcutClickHandler: function(shortcut){
            this.shortcutMenuClose();

            if (shortcut.value) {
                let value = shortcut.value();
                this.onPick(value);
            }

            if (shortcut.onClick) shortcut.onClick(this);

            setTimeout(() => {
                this.$emit('on-shortcut-selected'); // 时间快捷方式被选中
                this.focus();
                this.reset();
            }, 0);
        },
        shortcutMenuToggle: function(){
            this.shortcutMenuDropdown = !this.shortcutMenuDropdown;
        },
        shortcutMenuOpen: function(){
            this.shortcutMenuDropdown = true;
        },
        shortcutMenuClose: function(){
            this.shortcutMenuDropdown = false;
        },
    },
    mounted () {
        this.shortcutMenuDataHandler();
    },
};
