
import { shallowMount, mount } from '@vue/test-utils';
import Indecision from '@/components/Indecision.vue';

describe('Indecision component', () => {
    let wrapper;
    let clgSpy;

    //hacer un mock del fetch API
    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecision);
        //funcion espia
        clgSpy = jest.spyOn(console, 'log');
        //limpiar los mocks
        jest.clearAllMocks();
    })

    test('debe de hacer match con el snapshot', () => {
            
            // const wrapper = shallowMount(Counter);
            expect(wrapper.html() ).toMatchSnapshot();
        })

    test('Escribir el input no debe disparar nada (console.log)', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm , 'getAnswer');
        //78. Spy y Mocks
        const input = wrapper.find('input');
        await input.setValue('Hola Mundo');

        //
        expect( clgSpy ).toHaveBeenCalledTimes(1);
        //saber si una funcion ha sido disparada
        expect( getAnswerSpy ).not.toHaveBeenCalled(); //no debe ser llamada;
        // console.log(wrapper)


    })

    test('Escribir el simbolo "?" debe disparar el getAnswer ', async() => {
       //cuano ponga signo de interrogacion verificar que dispare getAnswer
         const getAnswerSpy = jest.spyOn(wrapper.vm , 'getAnswer');
            const input = wrapper.find('input');
            // if(input.element.value === '?'){
            //     expect( getAnswerSpy ).toHaveBeenCalledTimes(1);
            // }

            //78. Spy y Mocks
            await input.setValue('Hola Mundo?');
            expect( clgSpy ).toHaveBeenCalledTimes(1);
            //saber si una funcion ha sido disparada
            expect( getAnswerSpy ).toHaveBeenCalled();

    })

    test('Pruebas en getAnswer', async() => {
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img');
        expect( img.exists() ).toBeTruthy();
        expect( wrapper.vm.img ).toBe('https://yesno.wtf/assets/yes/2.gif');
        expect( wrapper.vm.answer ).toBe('Si');
    })

    test('Pruebas en el getAnswer - Fallo en el API', async() => {
        fetch.mockImplementationOnce( () => Promise.reject('API is down'))
        //fallo en el API
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img');
        
        expect (img.exists()).toBeFalsy();
        expect( wrapper.vm.answer ).toBe('No se pudo cargar del API');
    })

})