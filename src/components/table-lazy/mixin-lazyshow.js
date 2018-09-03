export default {
    props: {
        lazyShow: {
            type: [Number, Boolean],
            default: false
        },
    },
    data(){
        return {
            lazyShowData: {
                show: false,
                pushAmount: 0,
                data: [],
                lastScroll: 0,
                reachedBottomScrollLimit: false,
            },
        };
    },
    watch: {
        rebuildData: {
            handler (val) {
                if(!this.lazyShowData.show) return;
                this.resetTableScrolltop();
                this.lazyShowData.data = val.slice(0, this.lazyShowData.pushAmount);
                // this.lazyShowData.data = val.slice(0, this.lazyShowData.data.length);
            },
            deep: true,
        },
    },
    created () {
        this.initLazyshowData();
    },
    methods: {
        initLazyshowData: function(){ // default height: 100, default pushamout: 100
            if (this.lazyShow) {
                !this.height && (this.height = 100);
    
                Object.assign(this.lazyShowData, {
                    show: true,
                    pushAmount: typeof this.lazyShow === 'number' ? this.lazyShow : 100
                });
    
                this.$nextTick(() => {
                    this.lazyShowData.data = this.rebuildData.slice(0, this.lazyShowData.pushAmount);
                });
            }
        },

        handleBodyWheel: function(event){
            if(!this.lazyShowData.show){
                this.handleBodyScroll(event);
                return;
            }
            this.stretchEdge(event);
        },

        stretchEdge: function(event){
            const direction = event.wheelDelta ? event.wheelDelta : -(event.detail || event.deltaY);
            const el = this.$refs.body;
            const tbody = this.$refs.tbody.$el;
            const isFullContain = tbody.clientHeight >= el.clientHeight;

            if(direction < 0 && (this.lazyShowData.reachedBottomScrollLimit || !isFullContain)){
                !isFullContain && event.preventDefault();
                this.onCallback();
            } else {
                !this.lazyShowData.reachedBottomScrollLimit && this.handleBodyScroll(event);
                this.handleBodyLazyshowScroll();
            }

            event = null;
        },

        handleBodyLazyshowScroll: function(){
            let lazyShowData = this.lazyShowData;
            const el = this.$refs.body;
            const scrollDirection = Math.sign(lazyShowData.lastScroll - el.scrollTop);
            const displacement = el.scrollHeight - el.clientHeight - el.scrollTop;

            if(scrollDirection == -1 && displacement <= 1){
                lazyShowData.reachedBottomScrollLimit = true;
                this.onCallback();
            } else {
                lazyShowData.reachedBottomScrollLimit = false;
                lazyShowData.lastScroll = el.scrollTop;
            }
        },

        onCallback: function(){
            let lazyShowData = this.lazyShowData;

            if(lazyShowData.data.length < this.rebuildData.length){
                lazyShowData.data = this.rebuildData.slice(0, lazyShowData.data.length + lazyShowData.pushAmount);
                lazyShowData.reachedBottomScrollLimit = false;
            }

            lazyShowData.lastScroll = 0;
            lazyShowData = null;
        },

        resetTableScrolltop: function(){
            // if (this.showHeader) this.$refs.header.scrollLeft = event.target.scrollLeft;
            this.$refs.body.scrollTop = 0;
            if (this.isLeftFixed) this.$refs.fixedBody.scrollTop = 0;
            if (this.isRightFixed) this.$refs.fixedRightBody.scrollTop = 0;
            this.hideColumnFilter();
        },

    },
    
};
