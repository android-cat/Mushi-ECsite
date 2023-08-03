import HeadBar from '@/Layouts/HeadBar';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import TextArea from '@/Components/TextArea';
import {Head, useForm} from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function Dashboard({ auth}) {

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        title: "",
        content: "",
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route(''));
    };

    return (
        <HeadBar
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">CreateItem</h2>}
        >
            <Head title="新規出品" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg transform">
                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <div>
                                <InputLabel htmlFor="title" value="Title" />

                                <TextInput
                                    id="title"
                                    className="mt-1 block w-6/12"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    required
                                    isFocused
                                    autoComplete="title"
                                />

                                <InputError className="mt-2" message={errors.name} />
                            </div>
                            <div>
                                <InputLabel htmlFor="content" value="Content" />

                                <TextArea
                                    id="content"
                                    className="mt-1 block w-6/12"
                                    value={data.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                    required
                                    isFocused
                                    autoComplete="content"
                                />

                                <InputError className="mt-2" message={errors.name} />
                            </div>
                            <div className="flex items-center gap-4">
                                <PrimaryButton disabled={processing}>Save</PrimaryButton>
                                <a className='inline-flex items-center px-4 py-2 bg-red-700
                                    border border-transparent rounded-md font-semibold text-xs
                                    text-white uppercase tracking-widest hover:bg-red-800 
                                    transition ease-in-out duration-150' href="/dashboard">
                                        cancel
                                </a>
                                <Transition
                                    show={recentlySuccessful}
                                    enterFrom="opacity-0"
                                    leaveTo="opacity-0"
                                    className="transition ease-in-out"
                                >
                                    <p className="text-sm text-gray-600">Saved.</p>
                                </Transition>
                            </div>
                        </form>
                    </div>
                </div>
                <script>
                </script>
            </div>
        </HeadBar>
    );
}