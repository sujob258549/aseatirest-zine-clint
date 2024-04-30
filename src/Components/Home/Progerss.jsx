
import { Flat } from '@alptugidin/react-circular-progress-bar'

const Progerss = () => {
    return (
        <div className='py-10 md:py-20'>
            <h1 data-aos="fade-top" className="text-3xl md:text-5xl  font-bold pb-5 md:pb-10 text-center">Tourist Place  progress</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 lg:grid-cols-6 gap-5 md:gap-10'>
                <div>
                    <h2 className='text-3xl font-bold text-center py-5'>Bangladesh</h2>
                    <Flat
                        progress={30}
                        range={{ from: 0, to: 100 }}
                        sign={{ value: '%', position: 'end' }}
                        text={'Match'}
                        showMiniCircle={true}
                        showValue={true}
                        sx={{
                            strokeColor: '#ff0000',
                            barWidth: 5,
                            bgStrokeColor: '#ffffff',
                            bgColor: { value: '#000000', transparency: '20' },
                            shape: 'full',
                            strokeLinecap: 'round',
                            valueSize: 13,
                            valueWeight: 'bold',
                            valueColor: '#000000',
                            valueFamily: 'Trebuchet MS',
                            textSize: 13,
                            textWeight: 'bold',
                            textColor: '#000000',
                            textFamily: 'Trebuchet MS',
                            loadingTime: 1000,
                            miniCircleColor: '#ff0000',
                            miniCircleSize: 5,
                            valueAnimation: true,
                            intersectionEnabled: true
                        }}
                    />
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-center py-5'>Cambodia
                    </h2>
                    <Flat

                        progress={35}
                        range={{ from: 0, to: 100 }}
                        sign={{ value: '%', position: 'end' }}
                        showValue={true}
                        revertBackground={false}
                        text={'Match'}
                        sx={{
                            strokeColor: '#ff0000',
                            barWidth: 5,
                            bgStrokeColor: '#ffffff',
                            bgColor: { value: '#000000', transparency: '20' },
                            shape: 'full',
                            strokeLinecap: 'round',
                            valueSize: 13,
                            valueWeight: 'bold',
                            valueColor: '#000000',
                            valueFamily: 'Trebuchet MS',
                            textSize: 13,
                            textWeight: 'bold',
                            textColor: '#000000',
                            textFamily: 'Trebuchet MS',
                            loadingTime: 1000,
                            miniCircleColor: '#ff0000',
                            miniCircleSize: 5,
                            valueAnimation: true,
                            intersectionEnabled: true
                        }}
                    />
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-center py-5'>Vietnam
                    </h2>
                    <Flat
                        progress={80}
                        range={{ from: 0, to: 100 }}
                        sign={{ value: '%', position: 'end' }}
                        showValue={true}
                        revertBackground={false}
                        text={'Match'}
                        sx={{
                            strokeColor: '#ff0000',
                            barWidth: 5,
                            bgStrokeColor: '#ffffff',
                            bgColor: { value: '#000000', transparency: '20' },
                            shape: 'full',
                            strokeLinecap: 'round',
                            valueSize: 13,
                            valueWeight: 'bold',
                            valueColor: '#000000',
                            valueFamily: 'Trebuchet MS',
                            textSize: 13,
                            textWeight: 'bold',
                            textColor: '#000000',
                            textFamily: 'Trebuchet MS',
                            loadingTime: 1000,
                            miniCircleColor: '#ff0000',
                            miniCircleSize: 5,
                            valueAnimation: true,
                            intersectionEnabled: true
                        }}
                    />
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-center py-5'>Indonesia
                    </h2>
                    <Flat
                        progress={60}
                        range={{ from: 0, to: 100 }}
                        sign={{ value: '%', position: 'end' }}
                        showValue={true}
                        revertBackground={false}
                        text={'Match'}
                        sx={{
                            strokeColor: '#ff0000',
                            barWidth: 5,
                            bgStrokeColor: '#ffffff',
                            bgColor: { value: '#000000', transparency: '20' },
                            shape: 'full',
                            strokeLinecap: 'round',
                            valueSize: 13,
                            valueWeight: 'bold',
                            valueColor: '#000000',
                            valueFamily: 'Trebuchet MS',
                            textSize: 13,
                            textWeight: 'bold',
                            textColor: '#000000',
                            textFamily: 'Trebuchet MS',
                            loadingTime: 1000,
                            miniCircleColor: '#ff0000',
                            miniCircleSize: 5,
                            valueAnimation: true,
                            intersectionEnabled: true
                        }}
                    />
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-center py-5'>Malaysia
                    </h2>
                    <Flat
                        progress={70}
                        range={{ from: 0, to: 100 }}
                        sign={{ value: '%', position: 'end' }}
                        showValue={true}
                        revertBackground={false}
                        text={'Match'}
                        sx={{
                            strokeColor: '#ff0000',
                            barWidth: 5,
                            bgStrokeColor: '#ffffff',
                            bgColor: { value: '#000000', transparency: '20' },
                            shape: 'full',
                            strokeLinecap: 'round',
                            valueSize: 13,
                            valueWeight: 'bold',
                            valueColor: '#000000',
                            valueFamily: 'Trebuchet MS',
                            textSize: 13,
                            textWeight: 'bold',
                            textColor: '#000000',
                            textFamily: 'Trebuchet MS',
                            loadingTime: 1000,
                            miniCircleColor: '#ff0000',
                            miniCircleSize: 5,
                            valueAnimation: true,
                            intersectionEnabled: true
                        }}
                    />
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-center py-5'>Vietnam
                    </h2>
                    <Flat
                        progress={45}
                        range={{ from: 0, to: 100 }}
                        sign={{ value: '%', position: 'end' }}
                        showValue={true}
                        revertBackground={false}
                        text={'Match'}
                        sx={{
                            strokeColor: '#ff0000',
                            barWidth: 5,
                            bgStrokeColor: '#ffffff',
                            bgColor: { value: '#000000', transparency: '20' },
                            shape: 'full',
                            strokeLinecap: 'round',
                            valueSize: 13,
                            valueWeight: 'bold',
                            valueColor: '#000000',
                            valueFamily: 'Trebuchet MS',
                            textSize: 13,
                            textWeight: 'bold',
                            textColor: '#000000',
                            textFamily: 'Trebuchet MS',
                            loadingTime: 1000,
                            miniCircleColor: '#ff0000',
                            miniCircleSize: 5,
                            valueAnimation: true,
                            intersectionEnabled: true
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Progerss;