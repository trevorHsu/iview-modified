import { clearHours } from '../../util';

export default {
    data(){
        return {
            currentPanel: '', // for split panel
        };
    },
    methods: {
        disableDate_splitMode(date, panelPosition){
            let disabledDateByUser = this.disabledDate ? this.disabledDate(date) : false;
            let isDisabled = false;

            if(!this.dates[0] || !this.dates[1]) return disabledDateByUser;

            switch(panelPosition){
                case 'left':
                    (clearHours(date) > clearHours(this.dates[1])) && (isDisabled = true);
                    break;
                case 'right':
                    (clearHours(date) < clearHours(this.dates[0])) && (isDisabled = true);
                    break;
            }

            return isDisabled || disabledDateByUser ;
        },
        handleRangeDatePick (panel, dateSorter, date) { // 处理日期点击
            let dateAlias = panel === 'right' ? 'to' : 'from';

            this.currentPanel = panel;
            this.rangeState[dateAlias] = date;

            if (!this.rangeState.from || !this.rangeState.to) {
                this.rangeState.selecting = true;
            } else {
                this.rangeState.selecting = false;
            }
            
            if (!this.rangeState.selecting) {
                // const [minDate, maxDate] = [this.rangeState.from, this.rangeState.to].sort(dateSorter);                
                const [minDate, maxDate] = this.dateRangeValidate([this.rangeState.from, this.rangeState.to], dateSorter);

                this.dates = [minDate, maxDate];

                this.rangeState = {
                    from: minDate,
                    to: maxDate,
                    selecting: false
                };
                this.handleConfirm(false, 'date');
            }
        },
    },
};
