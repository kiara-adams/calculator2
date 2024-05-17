document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display input[name="display"]');
    const buttons = document.querySelectorAll('.calculater input[type="button"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonValue = this.value;
            
            switch(buttonValue) {
                case 'CE':
                    display.value = '';
                    break;
                case 'DE':
                    display.value = display.value.slice(0, -1);
                    break;
                case '=':
                    try {
                        display.value = eval(display.value);
                    } catch (error) {
                        display.value = 'Error';
                    }
                    break;
                default:
                    display.value += buttonValue;
                    
            }
        });
    });
});


