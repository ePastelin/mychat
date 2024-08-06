import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import { MdClose } from "react-icons/md";
import Button, { CreateButton, UpdateButton } from '../common/Button';

export default function Form({
  open,
  setOpen,
  setEdit,
  edit,
  updateById,
  id,
  children,
}) {
  const handleClose = () => {
    setOpen(false)
  }

  const editData = async () => {
    if (!edit) {
      alert('No hay nada que editar')
      return
    }

    await updateById(edit, id)
    handleClose()
    setEdit(null)
    window.location.reload()
  }

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            width: '50%',
            height: '64%',
            overflow: 'auto',
          }}
        >
          <MdClose onClick={handleClose} className=' text-red-400 text-2xl hover:cursor-pointer'/>
          <p className=' mt-4 ml-4'>
            Edita solamente los campos que quieres cambiar
          </p>
          {children}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <UpdateButton onClick={editData} />
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}

export function FormCreate({
  open,
  setOpen,
  setEdit,
  edit,
  create,
  children,
}) {
  const handleClose = () => {
    setOpen(false)
  }

  const createData = async () => {
    if (!edit) {
      alert('No hay nada que crear')
      return
    }

    await create(edit)
    handleClose()
    setEdit(null)
    window.location.reload()
  }

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            width: '50%',
            height: '64%',
            overflow: 'auto',
          }}
        >
          <MdClose onClick={handleClose} className=' text-red-400 text-2xl hover:cursor-pointer'/>
          <p className=' mt-4 ml-4'>
            Llena todos los campos
          </p>
          {children}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CreateButton onClick={createData} />
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}

export function FormNumber ({
  open,
  setOpen,
  setNumber,
  number,
  createNumber,
  children,
}) {
  const handleClose = () => {
    setOpen(false)
  }

  const createData = async () => {
    if (!number) {
      alert('No hay nada que crear')
      return
    }

    await createNumber(number)
    handleClose()
    setNumber(null)
    window.location.reload()
  }

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            width: '50%',
            height: '64%',
            overflow: 'auto',
          }}
        >
          <MdClose onClick={handleClose} className=' text-red-400 text-2xl hover:cursor-pointer'/>
          <p className=' mt-4 ml-4'>
            Llena todos los campos
          </p>
          {children}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CreateButton onClick={createData} />
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}