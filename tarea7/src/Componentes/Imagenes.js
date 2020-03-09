import React from 'react';
import { useFormik } from 'formik';

const Imagenes = (props) => {

    const formik = useFormik({
        initialValues: {
          name: '',
          album: '',
          link: '',
        },
        onSubmit: values => {
          props.guardar(values);
        },
      });

    return (
        <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Crear Cancion</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form className="form-inline">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="form-control mb-2 mr-sm-2" placeholder="Name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            <input
                                id="album"
                                name="album"
                                type="text"
                                className="form-control mb-2 mr-sm-2" placeholder="Album"
                                onChange={formik.handleChange}
                                value={formik.values.album}
                            />
                            <input
                                id="link"
                                name="link"
                                type="text"
                                className="form-control mb-2 mr-sm-2" placeholder="Link"
                                onChange={formik.handleChange}
                                value={formik.values.link}
                            />
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={formik.handleSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Imagenes;