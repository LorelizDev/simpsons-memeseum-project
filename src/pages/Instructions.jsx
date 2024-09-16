import React from 'react';
import { Disclosure } from '@headlessui/react';

const instrucciones = [
  {
    titulo: '1.- Página de Inicio',
    contenido: [
      'Al acceder a la aplicación, serás recibido en la página de inicio.',
      'Aquí encontrarás un botón destacado que dice “Entrar”.',
      'Haz clic en el botón “Entrar” para comenzar tu recorrido por el museo.',
    ],
  },
  {
    titulo: '2.- Galería Principal',
    contenido: [
      'Después de hacer clic en “Entrar”, serás redirigido a la Galería Principal.',
      'En esta sección, podrás ver una selección de 8 imágenes principales de memes de los Simpsons.',
      'Navega por estas imágenes para disfrutar de algunos de los memes más populares.',
    ],
  },
  {
    titulo: '3.- Galería Completa',
    contenido: [
      'Para explorar todos los memes disponibles, dirígete a la Galería Completa.',
      'Puedes acceder a esta sección desde la Galería Principal o mediante el menú de navegación.',
      'Aquí encontrarás una colección extensa de memes, organizados para facilitar su búsqueda y visualización.',
    ],
  },
  {
    titulo: '4.- Crear y Agregar Memes',
    contenido: [
      'Si deseas contribuir con tus propios memes, ve a la página de Crear y Agregar.',
      'En esta sección, podrás subir tus imágenes, añadir descripciones y etiquetas para que otros usuarios puedan encontrarlas fácilmente.',
      'Sigue las instrucciones en pantalla para completar el proceso de subida.',
    ],
  },
  {
    titulo: '5.- Página de Instrucciones',
    contenido: [
      'Si en cualquier momento necesitas ayuda o quieres revisar estas instrucciones, puedes acceder a la Página de Instrucciones.',
      'Esta página está diseñada para guiarte a través de las funcionalidades del museo y asegurarte de que aproveches al máximo tu experiencia.',
    ],
  },
];

function UserManual() {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Instrucciones para Recorrer el Museo de Memes de los Simpsons</h2>
      <p className="text-lg text-gray-700 mb-4">
      Nuestro proyecto grupal consiste en el desarrollo de una aplicación CRUD (Crear, Leer, Actualizar, Borrar) dedicada a la recopilación y exhibición de memes de los Simpsons. Este museo virtual no solo celebra la rica historia de la serie animada, sino que también destaca su impacto cultural a través de los memes, que han trascendido generaciones y fronteras.
      </p>
      {instrucciones.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <Disclosure.Button className={`w-full px-4 py-2 text-left text-lg font-medium text-gray-700 bg-blue-200 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 ${!open ? 'mb-4' : ''}`}>
                {item.titulo}
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700">
                <ul className="list-disc list-inside space-y-2">
                  {item.contenido.map((linea, idx) => (
                    <li key={idx}>{linea}</li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}

export default UserManual;