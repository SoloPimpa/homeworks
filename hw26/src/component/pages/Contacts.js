import React from 'react';

const Contacts = () => {

    return (
        <div className="container-md">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Contacts</h2>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                               placeholder="Name" name="name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                               placeholder="Surname" name="username" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                               placeholder="Email" name="email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </div>
    );

}

export default Contacts;