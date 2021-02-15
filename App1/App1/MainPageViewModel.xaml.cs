using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using System.Collections.ObjectModel;

namespace App1
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class MainPageVIewModel : INotifyPropertyChanged
    {
        public MainPageVIewModel()
        {
            EraseCommand = new Command(() =>
            {
                TheNote = string.Empty;
            });

            SaveCommand = new Command(() =>
            {
                AllNotes.Add(TheNote);

                TheNote = string.Empty;
            });
        }

        public ObservableCollection<string> AllNotes { get; set; }

        public event PropertyChangedEventHandler PropertyChanged;

        string theNote;
        public string TheNote
        {
            get => theNote;
            set
            {
                theNote = value;

                var args = new PropertyChangedEventArgs(nameof(TheNote));

                PropertyChanged?.Invoke(this, args);
            }
        }

        public Command SaveCommand { get;  }

        public Command EraseCommand { get; }
    }
}