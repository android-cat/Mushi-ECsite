import HeadBar from '@/Layouts/HeadBar';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <HeadBar
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="ダッシュボード" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                {(() => 
                    {
                        if(auth.user.roles == 1 || auth.user.roles == 2){
                            return(
                                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                        <h3 className='font-semibold flex'>
                                            Sell item
                                            <a href="/createItem" className='ml-auto -translate-y-3 hover:bg-gray-300 duration-500'>
                                                +
                                            </a>
                                        </h3>

                                    </div>
                            );
                        }else{
                            return(
                                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                        <h3 className='font-semibold flex'>
                                            Sell item
                                        </h3>
                                        you can't sell
                                    </div>
                            );
                        }
                    }
                )()}
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg transform">
                        <h3 className='font-semibold'>Buy item</h3>

                    </div>
                </div>
                <script>
                </script>
            </div>
        </HeadBar>
    );
}
