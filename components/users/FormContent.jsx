import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

export default function FormContent({ setEdit, user, numbers }) {
  const [phoneNumbers, setPhoneNumbers] = useState(user && user.phone_numbers.map(String)); // Convertir todos los números a strings

  console.log(numbers)
  useEffect(() => {
    setEdit(value => ({ ...value, phone_numbers: phoneNumbers }));
  }, [phoneNumbers, setEdit]);

  const handlePhoneChange = (e, index) => {
    const newPhoneNumbers = phoneNumbers.map((phone, i) => (i === index ? e.target.value : phone));
    setPhoneNumbers(newPhoneNumbers);
  };

  const handleAddPhone = () => {
    setPhoneNumbers([...phoneNumbers, '']);
  };

  const handleRemovePhone = index => {
    const newPhoneNumbers = phoneNumbers.filter((_, i) => i !== index);
    setPhoneNumbers(newPhoneNumbers);
  };

  const handleSelectChange = (e, index) => {
    const selectedNumber = e.target.value;
    const newPhoneNumbers = phoneNumbers.map((phone, i) => (i === index ? selectedNumber : phone));
    setPhoneNumbers(newPhoneNumbers);
  };

  console.log(user)
  console.log(user.phoneNumbers, 'user.phoneNumbers')
  // Convertir numbers a strings y excluir los que ya están en phoneNumbers
  const availableNumbers = user.phone_numbers && numbers.filter(number => !phoneNumbers.includes(String(number.idnumber)));
  console.log(availableNumbers, 'availableNumbers')

  return (
    <div className="p-4 space-y-4">
      <TextField
        id='username'
        label='Nombre de usuario'
        variant='outlined'
        fullWidth
        helperText={user.username}
        onChange={e => setEdit(value => ({ ...value, username: e.target.value }))}
        className="mb-4"
      />

      <TextField
        id='fullname'
        label='Nombre completo'
        variant='outlined'
        fullWidth
        helperText={user.fullname}
        onChange={e => setEdit(value => ({ ...value, fullname: e.target.value }))}
        className="mb-4"
      />

      <TextField
        id='role_id'
        label='Rol'
        variant='outlined'
        fullWidth
        select
        helperText={user.rol}
        onChange={e => setEdit(value => ({ ...value, role_id: e.target.value }))}
        className="mb-4"
      >
        {rol.map(rol => (
          <MenuItem key={rol.idRol} value={rol.idRol}>
            {rol.rolName}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id='password'
        label='Contraseña'
        variant='outlined'
        fullWidth
        helperText={'No olvides tu contraseña'}
        onChange={e => setEdit(value => ({ ...value, password: e.target.value }))}
        className="mb-4"
      />

        {console.log(phoneNumbers, 'phone')}

      {phoneNumbers.map((phone, index) => (
        <div key={index} className="flex items-center space-x-4 mb-4">
          <TextField
            id={`phone-${index}`}
            label={`Teléfono ${index + 1}`}
            variant='outlined'
            value={phone}
            onChange={e => handlePhoneChange(e, index)}
            className="flex-1"
          />
          <TextField
            select
            variant='outlined'
            value={phone}
            onChange={e => handleSelectChange(e, index)}
            className="flex-1"
          >
            {availableNumbers.map((number, idx) => (
              <MenuItem key={idx} value={String(number.idnumber)}>
                {number.number}
              </MenuItem>
            ))}
          </TextField>
          <Button onClick={() => handleRemovePhone(index)} className="text-red-500">
            -
          </Button>
        </div>
      ))}

      <Button onClick={handleAddPhone} className="text-blue-500">
        Agregar Teléfono
      </Button>
    </div>
  );
}

export function FormContentCreate ( {setEdit, numbers} ) {
    const [phoneNumbers, setPhoneNumbers] = useState(['']);
    console.log(numbers)

    useEffect(() => {
      setEdit(value => ({ ...value, phone_numbers: phoneNumbers }));
    }, [phoneNumbers, setEdit]);
  
    const handlePhoneChange = (e, index) => {
      const newPhoneNumbers = phoneNumbers.map((phone, i) => (i === index ? e.target.value : phone));
      setPhoneNumbers(newPhoneNumbers);
    };
  
    const handleAddPhone = () => {
      setPhoneNumbers([...phoneNumbers, '']);
    };
  
    const handleRemovePhone = index => {
      const newPhoneNumbers = phoneNumbers.filter((_, i) => i !== index);
      setPhoneNumbers(newPhoneNumbers);
    };
  
    const handleSelectChange = (e, index) => {
      const selectedNumber = e.target.value;
      const newPhoneNumbers = phoneNumbers.map((phone, i) => (i === index ? selectedNumber : phone));
      setPhoneNumbers(newPhoneNumbers);
    };
  
    return (
      <div className="p-4 space-y-4">
        <TextField
          id='username'
          label='Nombre de usuario'
          variant='outlined'
          fullWidth
          onChange={e => setEdit(value => ({ ...value, username: e.target.value }))}
          className="mb-4"
        />
  
        <TextField
          id='fullname'
          label='Nombre completo'
          variant='outlined'
          fullWidth
          onChange={e => setEdit(value => ({ ...value, fullname: e.target.value }))}
          className="mb-4"
        />
  
        <TextField
          id='role_id'
          label='Rol'
          variant='outlined'
          fullWidth
          select
          onChange={e => setEdit(value => ({ ...value, role_id: e.target.value }))}
          className="mb-4"
        >
          {rol.map(rol => (
            <MenuItem key={rol.idRol} value={rol.idRol}>
              {rol.rolName}
            </MenuItem>
          ))}
        </TextField>
  
        <TextField
          id='password'
          label='Contraseña'
          variant='outlined'
          fullWidth
          onChange={e => setEdit(value => ({ ...value, password: e.target.value }))}
          className="mb-4"
        />
  
        {phoneNumbers.map((phone, index) => (
          <div key={index} className="flex items-center space-x-4 mb-4">
            <TextField
              id={`phone-${index}`}
              label={`Teléfono ${index + 1}`}
              variant='outlined'
              value={phone}
              onChange={e => handlePhoneChange(e, index)}
              className="flex-1"
            />
            <TextField
              select
              variant='outlined'
              value={phone}
              onChange={e => handleSelectChange(e, index)}
              className="flex-1"
            >
              {numbers.map((number, idx) => (
                <MenuItem key={idx} value={String(number.number)}>
                  {number.number}
                </MenuItem>
              ))}
            </TextField>
            <Button onClick={() => handleRemovePhone(index)} className="text-red-500">
              -
            </Button>
          </div>
        ))}
  
        <Button onClick={handleAddPhone} className="text-blue-500">
          Agregar Teléfono
        </Button>
      </div>
    );
}

export function FormContentNumber({ setNumber, number }) {
  return (
    <div className="p-4 space-y-4">
      <TextField
        id='number'
        label='Número'
        variant='outlined'
        fullWidth
        onChange={e => setNumber(value => ({ ...value, number: Number(e.target.value) }))}
        className="mb-4"
      />
    </div>
  );
}

const rol = [
  {
    idRol: 1,
    rolName: 'Administrador',
  },
  {
    idRol: 2,
    rolName: 'Cobranza',
  },
  {
    idRol: 3,
    rolName: 'Contabilidad',
  },
];

